
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


class Game extends Phaser.Scene {    
    constructor(){
        super({key : 'game_scene'})
    }

    init(data){
     
     
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
    bg = this.add.image(0,0,'forest');
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
    player.body.setSize(54,30);
    
    

    this.time.addEvent({
        delay: 1000,
        callback: this.spawnEnemy,
        callbackScope: this,
        loop: true
    });

    this.time.addEvent({
        delay: 150,
        callback: this.spawnFireballSlow,
        callbackScope: this,
        loop: true
    });
 
    

    KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    KeyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    KeyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    scoreText = this.add.text(16, 16, 'Score: 0', { 
    fontSize: '12px', 
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
    

    if (dead) {
        
        if (!gameOverShown ) {
            this.time.removeAllEvents();
            this.physics.pause();
            bg2 = this.add.image(0, 0, 'blackbg').setOrigin(0, 0);
            bg2.setDisplaySize(960, 540);
            this.add.text(360, 200, 'Game Over', { fontSize: '54px', fill: '#3cff00' });
            this.add.text(420, 280, 'Score: ' + score, { fontSize: '36px', fill: '#ac0000' });
            gameOverShown = true;   
            this.scene.start();     
        }return;
        if (Phaser.Input.Keyboard.JustDown(KeyR)) {
            this.time.resumeAllEvents();
            console.log("Restarting game...");
            this.scene.restart();
        }
        
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
        this.scene.restart();
    }
    if (gameOverShown = true && Phaser.Input.Keyboard.JustDown(KeyR)) {
        console.log("Restarting game...");
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
        fireball.setScale(1.5);
        fireball.setSize(20, 20);
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
