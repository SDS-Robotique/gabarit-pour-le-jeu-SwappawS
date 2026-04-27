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
    this.load.spritesheet('SlimeV', ' assets/sprites/slime1.png', { frameWidth: 192, frameHeight: 192 });
    }
    
    create(data){
    bg = this.add.image(0,0,'forest');
    bg.setScale(2);
    bg.setOrigin(0, 0);
    
    
    player = this.physics.add.sprite(480, 270, 'SlimeV');
    player.setBounce(0.1);
    player.setCollideWorldBounds(true);
    player.setScale(1);
    player.body.setSize(58,34);
    this.physics.add.collider(player, platforms);
    
    
    this.score = 0;

    }
    
    update(time, delta){
     }
     

    }

export default Game
