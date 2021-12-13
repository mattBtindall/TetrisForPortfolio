'use strict';

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW: 
      // spin shape here
      console.log('spinning shape');
      break;
    case DOWN_ARROW: 
      Global.speedDivider = 15;
      break;
    case RIGHT_ARROW: 
      Global.shape.moveXHandler('collideRight', Global.scl, 'right');
      break;
    case LEFT_ARROW:
      Global.shape.moveXHandler('collideLeft', -Global.scl, 'left');
      break;
    case 32: // spacebar
      Global.shape.slam();
      break;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    Global.arrowPressedFlags.right = false;
  } else if (keyCode === LEFT_ARROW) {
    Global.arrowPressedFlags.left = false;
  } else if (keyCode === DOWN_ARROW) {
    Global.speedDivider = 1;
  }
}