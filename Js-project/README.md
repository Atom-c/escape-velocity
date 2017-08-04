# Escape Velocity

## Background
  The player controls an avatar at a constant speed trying to wait for rescue matching the pull of a black hold just off the bottom of the screen. Obstacles caught in the pull will be heading toward the player, pushing the player further down the screen. Quick relfexes will allow the player to survive without getting pushed to the bottom of the screen and into black hole.

## Animations
![Image](./docs/Escape-Velocity-Gameplay-Atom-C.gif)

## Basic Gameplay

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
  - [ ] Traps for the player to drop downward out of with `S` or `down arrow key`
  - [ ] Increasing levels of complexity and complications
  - [ ] "Levels" with background changes as time goes on and the difficulty jumps
