'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(highlighted) {
    this.highlighted = highlighted;
};

let bObj = new AttachedPost("alex", "sometext", "08.02.20", false);
bObj.edit("changeed text");
bObj.makeTextHighlighted(true);

console.log(bObj.text)
console.log(bObj.highlighted)

