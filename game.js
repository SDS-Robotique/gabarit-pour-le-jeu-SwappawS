
var dead = false;
var gameOverShown = false;
var player;
let score;
let scoreText;
var ennemy;
var bg;
var bg2;
var inv;
var KeyW;
var KeyA;
var KeyD;
var KeyR;
var sol;
var enemyGroup;
var keySpace;
var fireballGroup;
var shootyGroup;
var fireball;
var myTimer;

class Game extends Phaser.Scene {    
    constructor(){
        super({key : 'game_scene'})
    }

    init(data){
     dead = false;
     gameOverShown = false;
    }

    
preload(){
    this.load.image('forest', 'assets/images/forest_background.png');
    this.load.spritesheet('SlimeV', 'assets/sprites/slime1.png', { frameWidth: 192, frameHeight: 192 });
    this.load.spritesheet('platform', 'assets/sprites/platform.png', {frameWidth:63, frameHeight:18});
    this.load.spritesheet('sol', 'assets/sprites/sol.png', {frameWidth:339, frameHeight:173}) ; 
    this.load.spritesheet('crane', 'assets/sprites/crane.png', {frameWidth:225, frameHeight:225 });
    this.load.spritesheet('shooty', 'assets/sprites/shootytyty.png', {frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('fireball', 'assets/sprites/fireball.png', {frameWidth: 16, frameHeight: 32});
    this.load.image('blackbg', 'assets/images/blackbg.jpg');
}
    
create(data){
   myTimer = this.time.addEvent({
        callback: this.spawnFireballSlow, 
        callbackScope: this,
        loop: true,
    });
     
    

        

    bg = this.add.image(0, 0, 'forest');
    bg.setScale(2);
    bg.setOrigin(0, 0);
    score = 0;
    
    
    shootyGroup = this.physics.add.group();
    enemyGroup = this.physics.add.group();
    fireballGroup = this.physics.add.group();
    
    player = this.physics.add.sprite(480, 270, 'SlimeV');
    sol= this.add.sprite(470, 790, 'sol');
    sol.setScale(3);
    this.physics.add.collider(player, sol);
    player.setCollideWorldBounds(true);
    player.setScale(1);
    player.body.setSize(50,28);
    
    

    this.time.addEvent({
        delay:500,
        callback: this.spawnEnemy,
        callbackScope: this,
        loop: true
    });

    
    
     
       
            

 
    

    KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    KeyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    KeyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    scoreText = this.add.text(16, 54, 'Score: 0', { 
    fontSize: '24px', 
    fill: '#ffffff' 
});
 
    this.physics.add.collider(shootyGroup, enemyGroup, function(shootyCollide, enemyCollide){
        shootyCollide.destroy();
        enemyCollide.destroy();
        score += 1;
        scoreText.setText('Score: ' + score);
        
    }.bind(this));

    
    this.physics.add.overlap(fireballGroup, player, function(fireballSprite, playerSprite){
        fireballSprite.destroy();
        if (!dead) {
            dead = true;
        }
    }.bind(this));
}

    
update(time, delta){
    if (score < 5) {
      myTimer.delay = 900;
    } else if (score >= 5 && score < 10) {
       myTimer.delay = 550;
    } else if (score >= 10 && score < 15) {
        myTimer.delay = 250;
    } else {
        myTimer.delay = 100;
    }  
    

    
    console.log(myTimer.delay);

    if (dead) {
        if (!gameOverShown) {
            
            this.time.removeAllEvents();
            this.physics.pause();
            bg2 = this.add.image(0, 0, 'blackbg').setOrigin(0, 0);
            bg2.setDisplaySize(960, 540);
            this.add.text(360, 200, 'Game Over', { fontSize: '54px', fill: '#3cff00' });
            this.add.text(420, 280, 'Score: ' + score, { fontSize: '36px', fill: '#ac0000' });
            this.add.text(382, 400, 'Press R to restart', { fontSize: '24px', fill: '#ffffff' });
            gameOverShown = true;
        }

        if (Phaser.Input.Keyboard.JustDown(KeyR)) {
        
            this.scene.restart();
        }
        return;
    }

    if(KeyW.isDown && player.body.onFloor()){
        player.setVelocityY(-300)
    }
    if (KeyA.isDown) {
        player.setVelocityX(-250)
    } else if (KeyD.isDown){
        player.setVelocityX(250)
    } else{
        player.setVelocityX(0)
    }

    if (Phaser.Input.Keyboard.JustDown(keySpace)){
        this.spawnShooty();
    }
    if (KeyR.isDown) {
        time = 0; 
        this.scene.restart();
    }
    
    
}
spawnShooty(){
    const shooty = this.physics.add.sprite(player.x, player.y, 'shooty');
    shootyGroup.add(shooty);
    shooty.setVelocityY(-300);
    shooty.setScale(3);
    
    shooty.body.allowGravity = false;
    
    if (shooty.y < 0){
        shooty.destroy();
    }
}

spawnFireballSlow(){
        const randomX = Phaser.Math.Between(10,950 );
        const fireball = this.physics.add.sprite(randomX, -20, 'fireball');
        fireballGroup.add(fireball);
        fireball.setVelocityY(300);
        
        
        fireball.body.allowGravity = false;
        if (fireball.y > 540) {
            fireball.destroy();
        }

    }    









spawnEnemy(){
    const randomX = Phaser.Math.Between(10,950 );
    const enemy = this.physics.add.sprite(randomX, 0, 'crane');
    enemyGroup.add(enemy);
    enemy.setScale(0.2);
    enemy.setBounce(1.1);
    enemy.setCollideWorldBounds(true);
    enemy.setVelocityX(300);
    enemy.setVelocityY(0);
    this.physics.add.collider(enemy, sol);
    enemy.body.allowGravity = false;
}

}

export default Game
