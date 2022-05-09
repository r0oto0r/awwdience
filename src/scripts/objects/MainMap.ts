export default class MainMap extends Phaser.GameObjects.GameObject {
    private map: Phaser.Tilemaps.Tilemap;
    private tiles: Phaser.Tilemaps.Tileset;

    constructor(scene: Phaser.Scene) {
        super(scene, 'MainMap');

        this.map = scene.make.tilemap({ key: 'bar_map' });
        this.tiles = this.map.addTilesetImage('base_tiles_day');
        
        this.map.createLayer('ground', this.tiles);
        this.map.createLayer('groundthings', this.tiles);
        this.map.createLayer('interactivegroundthings', this.tiles);

        scene.add.existing(this);
    }

    public getTileID(x: number, y: number) {
        const tile = this.map.getTileAt(x, y);
        return tile?.index;
    }

    public getWidth() {
        return this.map.width;
    }

    public getHeight() {
        return this.map.height;
    }

    public getTileSet() {
        return this.map.tilesets[0];
    }
}
