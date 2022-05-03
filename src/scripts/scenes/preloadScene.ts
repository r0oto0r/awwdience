export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        this.load.image('base_tiles_day', 'assets/tilemaps/BarTilemapDay.png');
        this.load.tilemapTiledJSON('bar_map', 'assets/tilemaps/Bar.json');

        this.load.spritesheet('player', 'assets/spritesheets/PlayerSpritesheet.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.scene.start('MainScene');
        /**
         * This is how you would dynamically import the mainScene class (with code splitting),
         * add the mainScene to the Scene Manager
         * and start the scene.
         * The name of the chunk would be 'mainScene.chunk.js
         * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
         */
        // let someCondition = true
        // if (someCondition)
        //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
        //     this.scene.add('MainScene', mainScene.default, true)
        //   })
        // else console.log('The mainScene class will not even be loaded by the browser')
    }
}
