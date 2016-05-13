declare function require(arg: string) : any;
export let $ = require('jquery');

export function test(pred : boolean, text : string) : void {
    let results = ensureResults();

    // Create an element with the requested text, and set its class
    // depending on the predicate boolean.
    let div=$('<p></p>');
    div.text(text + ": " + (pred? "TRUE" : "FALSE"));
    div.addClass(pred? 'ion-pass' : 'ion-fail');

    if (!pred) results.addClass('ion-fail');
    results.append(div);
}


function ensureResults() {
    let results = $('#ion-results');

    if (results.length == 0) {
        results = $('<div></div>');
        results.attr('id', 'ion-results');
        $('body').append(results);
    }

    return results;
}
