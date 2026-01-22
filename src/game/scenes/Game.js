import { Scene } from 'phaser';

export class Game extends Scene {

    // player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody; // Typescript Shit

    get gameHeight() {
        return parseInt(this.game.config.height);
    }

    constructor() {
        super('Game');
    }

    create() {
        this.cameras.main.setBackgroundColor(0xdedede);

        this.createPlayer();
        this.createEnviroment();
        this.handleInputs();
        this.playerControl();
    }

    createPlayer() {
        this.player = this.physics.add.sprite(0, this.scale.height, "dino-idle")
            .setOrigin(0,1);
    }

    createEnviroment() {
        this.add
            .tileSprite(0, this.scale.height, 88, 26, 'ground')
            .setOrigin(0, 1)
    }

    playerControl() {
        const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        spaceBar.on("down", () => {
            console.log("Pressing Space");
        })
    }

    handleInputs() {
        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}