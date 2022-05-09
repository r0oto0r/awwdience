import easystarjs from 'easystarjs';
import MainMap from './MainMap';

export default class Pathfinder {
    private easystarjs: easystarjs.js;
    private map: MainMap;
    private grid: Array<Array<number>>;

    constructor(map: MainMap) {
        this.easystarjs = new easystarjs.js();
        this.map = map;

        this.grid = new Array();
        for(let y = 0; y < map.getHeight(); y++) {
            const col = new Array();
            for(let x = 0; x < map.getWidth(); x++) {
                col.push(map.getTileID(x,y));
            }
            this.grid.push(col);
        }

        this.easystarjs.setGrid(this.grid);

        const tileSet = this.map.getTileSet();
        const tileSetProps = tileSet.tileProperties;
        const acceptableTiles = new Array<number>();

        for(let i = tileSet.firstgid - 1; i < tileSet.total; ++i) {
            const tileId = i + 1;
            if(!tileSetProps.hasOwnProperty(i)) {
                acceptableTiles.push(tileId);
                continue;
            }
            if(!tileSetProps[i].collide) acceptableTiles.push(tileId);
            if(tileSetProps[i].cost) this.easystarjs.setTileCost(tileId, tileSetProps[i].cost);
        }

        console.log(acceptableTiles)

        this.easystarjs.setAcceptableTiles(acceptableTiles);
    }

    public async finndPath(fromX: number, fromY: number, toX: number, toY: number) {
        return new Promise((resolve, reject) => {
            this.easystarjs.findPath(fromX, fromY, toX, toY, (path) => {
                if (path === null) {
                    console.warn("Path was not found.");
                    reject();
                } else {
                    console.log(path);
                    resolve(path);
                }
            });
        })
    }
}
