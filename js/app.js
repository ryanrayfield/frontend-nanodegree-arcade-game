// Enemies our player must avoid
var Enemy = function(x, y, loc, spritePath) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = spritePath;
    this.x = x;
    this.y = y;
    this.loc = loc;
    //console.log(loc);
    //console.log(this);


};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.loc * dt;
    if (this.x > 505) {
        this.x = -200;
    }
    checkEnemyPosition();
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    // console.log(this)
};
Player.prototype.update = function() {
    // this.loc++;
};

Player.prototype.render = function(x, y) {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

    if (key === 'up') {
        this.y = this.y - 35;
        // console.log(key); 
    } else if (key === 'down') {
        this.y = this.y + 35;
        // console.log(key); 
    } else if (key === 'left') {
        this.x = this.x - 35;
        // console.log(key); 
    } else if (key === 'right') {
        this.x = this.x + 35;
        // console.log(key); 

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

//var collision = function (){
//    if (allEnemies[1].x=player.x)
//    console.log('hit');
//    }


var allEnemies = [];
var dracula = new Enemy(50, 75, 300,'images/enemy-bug.png');
allEnemies.push(dracula);
var devil = new Enemy(-100, 189, 100,'images/dragon.png');
allEnemies.push(devil);



var player = new Player(205, 415);

var checkEnemyPosition = function(i) {
    for (i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x >= (-50 + player.x) && allEnemies[i].x <= (50 + player.x)) && (allEnemies[i].y >= (-50 + player.y) && allEnemies[i].y <= (50 + player.y))) {
            resetPlayer();
        } //else {
        //  console.log('no');
        // }
        // console.log(allEnemies[i].x);
        //console.log(player.x + ', '+ player.y);
    }
};
var resetPlayer = function() {
    player.x = 205;
    player.y = 415;
};




//player.render(10,10);
//player.update();
//console.log(dracula);
//console.log(allEnemies);
//console.log(allEnemies[0]);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});