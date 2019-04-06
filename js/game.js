let config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 624,
  height: 384,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image('PLAN', '../img/PLAN.png');
  this.load.tilemapTiledJSON({
    key: 'room1',
    url: '../tilemap/em-tilemap-one-room.json'
  });
}

function create() {
  let map = this.make.tilemap({
    key: 'room1'
  });

  const Plan = map.addTilesetImage('PLAN');
  const Background = map.createStaticLayer('Background', Plan, 0, 0);
  const Walls = map.createStaticLayer('Walls', Plan, 0, 0);
  const Objects = map.createStaticLayer('Objects', Plan, 0, 0);
  const Monsters = map.createStaticLayer('Monsters', Plan, 0, 0);
}

function update() {}
