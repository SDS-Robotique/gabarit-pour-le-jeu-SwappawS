import Intro from './intro.js'
import Titre from './titre.js'
import Game from './game.js'

const intro_scene = new Intro();
const titre_scene = new Titre();
const game_scene = new Game();

var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true
        }
    },
};

var game = new Phaser.Game(config);

game.scene.add('intro_scene', intro_scene);
game.scene.add('titre_scene', titre_scene);
game.scene.add('game_scene', game_scene);

game.scene.start('intro_scene');