var gameBoundryRight = 505;

var Enemy = function(x, y, loc, spritePath) {

 this.sprite = spritePath;
 this.x = x;
 this.y = y;
 this.loc = loc;

};

Enemy.prototype.update = function(dt) {
 this.x += this.loc * dt;
 if (this.x > gameBoundryRight) {
  this.x = -200;
 }
 checkEnemyPosition();


};


Enemy.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y) {
 this.sprite = 'images/char-boy.png';
 this.x = x;
 this.y = y;

};
Player.prototype.update = function() {

};

Player.prototype.render = function(x, y) {

 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

 if (key === 'up') {
  this.y = this.y - 35;
 } else if (key === 'down') {
  this.y = this.y + 35;
 } else if (key === 'left') {
  this.x = this.x - 35;
 } else if (key === 'right') {
  this.x = this.x + 35;


 }

 if (this.x > 420) {
  this.x = 420;
 } else if (this.x < 0) {
  this.x = 0;
 } else if (this.y < 50) {
  this.y = 415;
 } else if (this.y > 415) {
  this.y = 415;
 }
};

Plater.prototype.resetPlayer = function() {
 player.x = 205;
 player.y = 415;
};

var allEnemies = [];
var dracula = new Enemy(50, 75, 300, 'images/enemy-bug.png');
allEnemies.push(dracula);
var devil = new Enemy(-100, 189, 100, 'images/dragon.png');
allEnemies.push(devil);



var player = new Player(205, 415);

var checkEnemyPosition = function(i) {
 for (i = 0; i < allEnemies.length; i++) {
  if ((allEnemies[i].x >= (-50 + player.x) && allEnemies[i].x <= (50 + player.x)) && (allEnemies[i].y >= (-50 + player.y) && allEnemies[i].y <= (50 + player.y))) {
   resetPlayer();
  }
 }
};


document.addEventListener('keyup', function(e) {
 var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
 };

 player.handleInput(allowedKeys[e.keyCode]);
});