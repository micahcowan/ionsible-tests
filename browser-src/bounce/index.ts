import * as Ion from "ionsible";
import { test } from "../common/test";

let game = new Ion.Game;

class Background extends Ion.Sprite {
    draw(c : CanvasRenderingContext2D) : void {
        c.fillStyle = "silver";
        c.fillRect(0, 0, c.canvas.width, c.canvas.height);
    }
}

class Ball extends Ion.Sprite {
    radius : number = 30;
    vel = Ion.veloc(-75, -75);
    draw(c : CanvasRenderingContext2D) : void {
        c.arc(0, 0, this.radius, 0, 2 * Math.PI);
        c.fillStyle = "blue";
        c.fill();
    }
    behaviors = [
        Ion.b.Momentum
      , Ion.b.Bounded(
            Ion.util.gameRect
          , Ion.util.spriteBounce
        )
    ]
    constructor(game : Ion.Game) {
        super(game);
        this.pos = Ion.point(game.canvas.width/2, game.canvas.height/2);
    }
}

game.setScene([
    new Background(game)
  , new Ball(game)
]);

game.start();
