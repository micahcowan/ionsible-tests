import * as Ion from "ionsible";
import { $, test } from "../common/test";

/*
declare function require(arg: string) : any;
let $ = require('jquery');
*/

// This one should appear directly in the body element
let a = new Ion.Game;

// This should be a child of the element with id 'my-parent'
let b = new Ion.Game({
    width: 640
  , height: 480
  , id: "ionsible-w-parent"
  , "parent": $('#my-parent')[0]
})

// Now just verify these.
let games = $('canvas')
let plain = games.filter('[id != "ionsible-w-parent"]');
let parented = games.filter('[id = "ionsible-w-parent"]');

test(games.length == 2, "There are exactly two canvas elements");
test(plain.length == 1, "One with an id");
test(parented.length == 1, "One without an id");

test(plain.parent().length != 0
     && plain.parent()[0].tagName.toUpperCase() == "BODY",
     "Id-less game canvas is descendant of BODY element.");
test(parented.parent().attr('id') == 'my-parent',
     "Id'd game canvas is descendant of #my-parent.");

test(plain.attr('width') == 800, "Canvas defaults to width of 800");
test(plain.attr('height') == 600, "Canvas defaults to height of 800");
test(parented.attr('width') == 640, "Explicit set of width to 640 works");
test(parented.attr('height') == 480, "Explicit set of width to 480 works");
