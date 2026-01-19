import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        // this.add.image(512, 384, 'background');

        // this.add.image(512, 300, 'logo');

        this.add.text(this.scale.width * 0.5, this.scale.height * 0.48, 'Start Game', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.on('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
