import * as Ion from "ionsible";

let date1 = new Date("May 11, 2016 10:00:00");
let date2 = new Date("May 11, 2016 10:01:00");
let stamp1 = new Ion.Timestamp(date1);
let stamp2 = new Ion.Timestamp(date2);
let dur = stamp2.sub(stamp1);

console.log("dur in seconds is " + dur.s);
console.log("dur in milliseconds is " + dur.ms);
