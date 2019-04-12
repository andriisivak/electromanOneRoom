let config, game;

config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 624,
  height: 384,
  zoom: 1.5,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0
      }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

game = new Phaser.Game(config);

function preload() {
  this.load.image('PLAN', '../img/PLAN.png');
  this.load.tilemapTiledJSON({
    key: 'room1',
    url: '../tilemap/em-tilemap-one-room.json'
  });
}

function create() {
  let map, Plan, Background, Walls, Objects, Monsters;

  map = this.make.tilemap({
    key: 'room1'
  });

  Plan = map.addTilesetImage('PLAN');
  
  Background = map.createStaticLayer('Background', Plan, 0, 0);
  Walls = map.createStaticLayer('Walls', Plan, 0, 0);
  Objects = map.createStaticLayer('Objects', Plan, 0, 0);
  Monsters = map.createStaticLayer('Monsters', Plan, 0, 0);
}

function update() {}
