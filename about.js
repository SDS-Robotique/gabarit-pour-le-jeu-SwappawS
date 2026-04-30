var bg;
var keyS;
var keyA;
class About extends Phaser.Scene {
    constructor(){
        super({key : 'about_scene'})
    }

    init(data){
    }
    
    preload(){
        this.load.image('about', 'assets/images/Aboutusbg.png');
    }
    
    create(data){
    bg = this.add.image(0, 0, 'about');
    bg.setOrigin(0,0);
    }
    
    update(time, delta){
    }
    
}

export default About