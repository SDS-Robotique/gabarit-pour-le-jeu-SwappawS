import { Create } from "phaser";

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
}
    
    create(data){
    bg = this.add.image(0,0,'forest')
    bg.setScale(2)
    bg.setOrigin(0, 0)
    
    
    player = this.physics.add.sprite(480, 270, 'SlimeV')
    platforms= this.add.sprite(100,270, 'platform')
    sol= this.add.sprite(470, 790, 'sol')
    sol.setScale(3);
    this.physics.add.collider(player, platforms)
    this.physics.add.collider(player, sol)
    
    ennemy=this.physics.add.sprite(100,200, 'crane')
    ennemy.setScale(0.2)
    this.physics.add.collider(ennemy, platforms)
    this.physics.add.collider(ennemy, sol)

    
    player.setBounce(0.5)
    player.setCollideWorldBounds(true)
    
    player.setScale(1)
    player.body.setSize(58,34)
    ennemy.setCollideWorldBounds(true)
    ennemyGroup = this.physics.add.group()
    
    this.ennemyGroup.children.each(function(item){
        this.time.addEvent()
        {
            item.create()
            {
    delay; 3000, 
    callback; this.spawnEnnemy, 
    callbackScope; this,
    loop; true
    }
   }
   
        
    })


    ennemy.setBounce(0.5);
    KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    KeyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    this.score = 0

}
    
    update(time, delta){
        console.log(player.body.onFloor())
        if(KeyW.isDown && player.body.onFloor()){
            player.setVelocityY(-240)
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
       

        
}
      }
    
spawnEnnemy()
{
    if(time>3000)
    spawnEnnemy == true
    ennemyGroup.add(ennemy)
}

export default Game
