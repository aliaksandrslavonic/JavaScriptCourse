'use strict';
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
       
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    makeTextHighlighted(highlighted) {
        this.highlighted = highlighted;
   
    }
}

let bObj = new AttachedPost("alex", "sometext", "08.02.20", false);
bObj.edit("changeed text");
bObj.makeTextHighlighted(true);

console.log(bObj.text)
console.log(bObj.highlighted)
