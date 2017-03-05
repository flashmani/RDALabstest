app.filter('startsWithLetter', function() {
    return function(items, letter) {

        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (letterMatch.test(item.nm.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});