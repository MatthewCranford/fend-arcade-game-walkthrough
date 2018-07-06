// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    // x pos
    // y pos

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If enemy is not passed boundary
        // Move forward
        // Increment x by speed * dt
    // else
        // Reset pos to start 
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Hero class
    // Constructor
        // Properties
            // x pos
            // y pos
            // Sprite image
        // Methods
            // Update position
                // Check collision here
                    // Did player x and y collide with enemy?
                // Check win here?
                    // Did player x and y reach final tile?
            // Render 
                // Draw player sprite on current x and y coord position
            // Handle keyboard input
                  // Update player's x and y property according to input
            // Reset Hero
                // Set x and y to starting x and y


              
       

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// New Hero object

// Init allEnemies array 
// For each enemy create and push new Enemy object into above array



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
