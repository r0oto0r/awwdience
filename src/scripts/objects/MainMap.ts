export default class MainMap extends Phaser.GameObjects.GameObject {
    constructor(scene: Phaser.Scene) {
        super(scene, 'MainMap');

        const map = scene.make.tilemap({ key: 'bar_map' });
        const tiles = map.addTilesetImage('base_tiles_day');
        
        map.createLayer('ground', tiles);
        map.createLayer('groundthings', tiles);
        map.createLayer('interactivegroundthings', tiles);

        scene.add.existing(this);
    }

    public update() {

    }
}