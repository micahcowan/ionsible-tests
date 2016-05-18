import * as ion from "ionsible";
import { test } from "../common/test";

let game = new ion.Game;

class Background extends ion.Sprite {
    draw(c : CanvasRenderingContext2D) : void {
        c.fillStyle = "silver";
        c.fillRect(0, 0, c.canvas.width, c.canvas.height);
    }
}

class Ball extends ion.Sprite {
    radius : number = 30;
    vel = ion.veloc(-175, -175);
    body = new ion.body.Circle(this.radius);
    draw(c : CanvasRenderingContext2D) : void {
        c.arc(0, 0, this.radius, 0, 2 * Math.PI);
        c.fillStyle = "blue";
        c.fill();
    }
    behaviors = [
        ion.b.Momentum
      , ion.b.Bounded(
            ion.util.gameRect
          , ion.util.spriteBounce
        )
    ]
    constructor(game : ion.Game) {
        super(game);
        this.pos = ion.point(game.canvas.width/2, game.canvas.height/2);
    }
}

game.setScene([
    new Background(game)
  , new Ball(game)
]);

game.start();
