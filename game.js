
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
var ennemyGroup;
var keySpace;


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
    this.load.spritesheet('crane', 'assets/sprites/crane.png', {frameWidth:225, frameHeight:225 });
    this.load.spritesheet('shooty', 'assets/sprites/shootytyty.png', {frameWidth: 32, frameHeight: 32});
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
    
    

    
    player.setBounce(0.5);
    player.setCollideWorldBounds(true);
    
    player.setScale(1);
    player.body.setSize(58,34);
   
   
   
    this.ennemyGroup = this.physics.add.group();

    this.time.addEvent({
        delay: 5000,
        callback: this.spawnEnnemy,
        callbackScope: this,
        loop: true
    });

    

    
    
    KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    KeyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    


    
    
        

        
}

    
update(time, delta){
    console.log(player.body.onFloor());
    if(KeyW.isDown && player.body.onFloor()){
        player.setVelocityY(-300)
    }
        if (KeyA.isDown) {
            player.setVelocityX(-150)
        } 
        else if (KeyD.isDown){
            player.setVelocityX(150)
        }
        else{
            player.setVelocityX(0)
         }
          keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

spawnShooty(){
    const shooty = this.physics.add.sprite(x,y,'shooty');
}

 spawnEnnemy(){
    const enemy = this.ennemyGroup.create(100, 500, 'crane');
    enemy.setScale(0.2);
    enemy.setBounce(1.05);
    enemy.setCollideWorldBounds(true);
    enemy.setVelocityX(200);
    enemy.setVelocityY(0);
    this.physics.add.collider(enemy, platforms);
    this.physics.add.collider(enemy, sol);
}
}
export default Game
