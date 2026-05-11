var pdv;
var player;
var score;
var ennemy;
var bg;
var inv;
var KeyW;
var KeyA;
var KeyD;
var platforms;
var sol;


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
    this.load.spritesheet('sol', 'assets/sprites/sol.png', {frameWidth:339, frameHeight:173}) ; 
    this.load.spritesheet('ennemyf', 'assets/sprites/skeletef.png', {frameWidth:16, frameHeight:64});
}
    
    create(data){
    bg = this.add.image(0,0,'forest');
    bg.setScale(2);
    bg.setOrigin(0, 0);
    
    
    player = this.physics.add.sprite(480, 270, 'SlimeV');
    platforms= this.add.sprite(100,270, 'platform');
    sol= this.add.sprite(470, 790, 'sol');
    sol.setScale(3);
    this.physics.add.collider(player, platforms);

    this.physics.add.collider(player, sol);
    ennemy=this.physics.add.sprite(100,200, 'ennemyf');
    this.anims.create({
        key: 'idle_enemy',
        frames: this.anims.generateFrameNumbers('ennemyf', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    
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
        console.log(player.body.onFloor());
        if(KeyW.isDown && player.body.onFloor()){
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
        player.anims.play('idle_enemy', true);
     }

    }

export default Game
