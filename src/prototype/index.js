/*eslint no-extend-native: */
Array.prototype.contains = function(array) {
    return array.every(function(item) {
        return this.indexOf(item) !== -1;
    }, this);
}