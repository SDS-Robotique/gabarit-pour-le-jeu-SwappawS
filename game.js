var pdv;
var player;
var score;
var enemy;
var bg;
var inv;
var KeyW;
var KeyA;
var KeyD;
var platforms;


class Game extends Phaser.Scene {    
    constructor(){
        super({key : 'game_scene'})
    }

    init(data){
     
     
    }

    
    preload(){
    this.load.image('forest', 'assets/images/forest_background.png');
    this.load.spritesheet('SlimeV', ' assets/sprites/slime1.png', { frameWidth: 192, frameHeight: 192 });
    this.load.spritesheet('platform', 'assets/sprites/platform.png', {frameWidth:63, frameHeight:18});
    }
    
    create(data){
    bg = this.add.image(0,0,'forest');
    bg.setScale(2);
    bg.setOrigin(0, 0);
    
    
    player = this.physics.add.sprite(480, 270, 'SlimeV');
    platforms= this.add.sprite(100,270, 'platform');
    this.physics.add.collider(player, platforms);
    
    player.setBounce(0.5);
    player.setCollideWorldBounds(true);
    player.setScale(1);
    player.body.setSize(58,34);
    KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    KeyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.score = 0;

    }
    
    update(time, delta){
        console.log(player.body.touching.down);
        if(KeyW.isDown && player.body.touching.down){
            player.setVelocityY(-240);
        }
            if (KeyA.isDown) {
                player.setVelocityX(-150);
            } 
            else if (KeyD.isDown){
                player.setVelocityX(150);
            }
            else{
                player.setVelocityX(0);
            }
     }

    }

export default Game
