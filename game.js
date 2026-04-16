var pdv;
var player;
var score;
var enemy;
var bg;
var inv;

class Game extends Phaser.Scene {    
    constructor(){
        super({key : 'game_scene'})
    }

    init(data){
  
    }

    
    preload(){
        this.load.image('forest', 'assets/images/forest_background.png');
        this.create.sprite('slimeV', ' assets/sprites/slime1.png');
    }
    
    create(data){
        player = this.add.sprite(0, 0,'slimeV')
    bg = this.add.image(0,0,'forest');
    bg.setScale(2);
    bg.setOrigin(0, 0);
    this.score = 0;

    }
    
    update(time, delta){
     }
     

    }

export default Game
