# Escape Velocity

## Background
  The player controls an avatar waiting for rescue caught in the pull of a black hole. The player is at a constant speed just below escape velocity off the bottom of the screen. Obstacles also caught in the pull of the black hole will be heading toward the player, pushing the player further down the screen. Quick relfexes will allow the player to survive without getting pushed to the bottom of the screen and into black hole.

## Basic Gameplay
![Image](./docs/Escape-Velocity-Gameplay-Atom-C.gif)

## Technologies employed
  The game was fully developed in just a few short days with Vanilla JavaScript, HTML5 Canvas, and CSS3 only. No external libraries were used.

### Event Listeners for Input
  When keys are depressed they set an index in an otherwise-empty `keys` array to the true boolean. When the key is no longer being pressed, the state of that key is changed to false and a separate function is called. This allows for smooth controlling of the avatar.

  ```js
  window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
  });
  window.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;

      ...

  function whatKey() {
    if (keys[37]) {
      if (avatarX - 12 > 0)
      {avatarX -= 12;}

      ...
  });
  ```

### Obstacle Class
  `obstacle` handles the boilerplate for generating obstacles to spawn on the screen in random locations. The main challenge here was creating a balanced set of obstacles for each screen line so the player has ample chance to dodge but also has a challenge. The context is passed into `Obstacle`'s constructor function so multiple obstacles can be drawn at will.

  ```js
  arr.push(new Obstacle(randomizerVar, 0, 280, 3, (6), ctx))

      ...

  class Obstacle {
    constructor(blockX, blockY, blockWidth, blockHeight, blockVel, context) {
      ...
    }
  ```




### Bonus Features (TBD)
  - [ ] Increasing levels of complexity and complications
  - [ ] "Levels" with background changes as time goes on and the difficulty jumps
  - [ ] Traps for the player to drop downward out of with `S` or `down arrow key`
