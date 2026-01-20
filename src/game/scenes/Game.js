import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
        this.cameras.main.setBackgroundColor(0xdedede);

        this.createPlayer();
        this.createEnviroment();
        this.handleInputs();
    }

    createPlayer() {
        this.add.sprite(0, this.scale.height, "dino-idle")
            .setOrigin(0,1);
    }

    createEnviroment() {
        this.add
            .tileSprite(0, this.scale.height, 1000, 26, 'ground')
            .setOrigin(0, 1)
    }

    handleInputs() {
        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}