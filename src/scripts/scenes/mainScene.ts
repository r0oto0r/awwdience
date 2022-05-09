import FpsText from '../objects/fpsText';
import MainMap from '../objects/MainMap';
import Map from '../objects/MainMap';
import Pathfinder from '../objects/Pathfinder';
import Player from '../objects/Player';

export default class MainScene extends Phaser.Scene {
    private fpsText: FpsText;
    private  map: MainMap;
    private controls: Phaser.Cameras.Controls.FixedKeyControl;
    private player: Player;
    private pathFinder: Pathfinder;

    constructor() {
        super({ key: 'MainScene' });
    }

    public create() {
        this.fpsText = new FpsText(this);
        this.map = new Map(this);
        this.player = new Player(this, 750, 450);
        this.pathFinder = new Pathfinder(this.map);

        const cursors = this.input.keyboard.createCursorKeys();
        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        };
        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
    }

    public update(time: number, delta: number) {
        this.fpsText.update();
        this.map.update();
        this.controls.update(delta);
    }
}
